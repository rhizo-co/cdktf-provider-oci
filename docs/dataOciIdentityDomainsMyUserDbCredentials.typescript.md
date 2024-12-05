# `dataOciIdentityDomainsMyUserDbCredentials` Submodule <a name="`dataOciIdentityDomainsMyUserDbCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyUserDbCredentials <a name="DataOciIdentityDomainsMyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials oci_identity_domains_my_user_db_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials(scope: Construct, id: string, config: DataOciIdentityDomainsMyUserDbCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig">DataOciIdentityDomainsMyUserDbCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig">DataOciIdentityDomainsMyUserDbCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialCount">resetMyUserDbCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialFilter">resetMyUserDbCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMyUserDbCredentialCount` <a name="resetMyUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialCount"></a>

```typescript
public resetMyUserDbCredentialCount(): void
```

##### `resetMyUserDbCredentialFilter` <a name="resetMyUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialFilter"></a>

```typescript
public resetMyUserDbCredentialFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyUserDbCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyUserDbCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyUserDbCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyUserDbCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyUserDbCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentials">myUserDbCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCountInput">myUserDbCredentialCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilterInput">myUserDbCredentialFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCount">myUserDbCredentialCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilter">myUserDbCredentialFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `myUserDbCredentials`<sup>Required</sup> <a name="myUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentials"></a>

```typescript
public readonly myUserDbCredentials: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `myUserDbCredentialCountInput`<sup>Optional</sup> <a name="myUserDbCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCountInput"></a>

```typescript
public readonly myUserDbCredentialCountInput: number;
```

- *Type:* number

---

##### `myUserDbCredentialFilterInput`<sup>Optional</sup> <a name="myUserDbCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilterInput"></a>

```typescript
public readonly myUserDbCredentialFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `myUserDbCredentialCount`<sup>Required</sup> <a name="myUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCount"></a>

```typescript
public readonly myUserDbCredentialCount: number;
```

- *Type:* number

---

##### `myUserDbCredentialFilter`<sup>Required</sup> <a name="myUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilter"></a>

```typescript
public readonly myUserDbCredentialFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyUserDbCredentialsConfig <a name="DataOciIdentityDomainsMyUserDbCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyUserDbCredentialsConfig: dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialCount">myUserDbCredentialCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialFilter">myUserDbCredentialFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myUserDbCredentialCount`<sup>Optional</sup> <a name="myUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialCount"></a>

```typescript
public readonly myUserDbCredentialCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}.

---

##### `myUserDbCredentialFilter`<sup>Optional</sup> <a name="myUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialFilter"></a>

```typescript
public readonly myUserDbCredentialFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}.

---

### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials: dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials = { ... }
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy: dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy: dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta: dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta = { ... }
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags: dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags = { ... }
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser: dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.dbPassword">dbPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expired">expired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.lastSetDate">lastSetDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedDbPassword">mixedDbPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedSalt">mixedSalt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.salt">salt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `dbPassword`<sup>Required</sup> <a name="dbPassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.dbPassword"></a>

```typescript
public readonly dbPassword: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expired`<sup>Required</sup> <a name="expired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expired"></a>

```typescript
public readonly expired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `lastSetDate`<sup>Required</sup> <a name="lastSetDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.lastSetDate"></a>

```typescript
public readonly lastSetDate: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList</a>

---

##### `mixedDbPassword`<sup>Required</sup> <a name="mixedDbPassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedDbPassword"></a>

```typescript
public readonly mixedDbPassword: string;
```

- *Type:* string

---

##### `mixedSalt`<sup>Required</sup> <a name="mixedSalt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedSalt"></a>

```typescript
public readonly mixedSalt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `salt`<sup>Required</sup> <a name="salt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.salt"></a>

```typescript
public readonly salt: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.user"></a>

```typescript
public readonly user: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyUserDbCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser</a>

---



