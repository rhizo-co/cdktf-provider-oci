# `dataOciIdentityDomainsMySmtpCredentials` Submodule <a name="`dataOciIdentityDomainsMySmtpCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMySmtpCredentials <a name="DataOciIdentityDomainsMySmtpCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials oci_identity_domains_my_smtp_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials(scope: Construct, id: string, config: DataOciIdentityDomainsMySmtpCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig">DataOciIdentityDomainsMySmtpCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig">DataOciIdentityDomainsMySmtpCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetMySmtpCredentialCount">resetMySmtpCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetMySmtpCredentialFilter">resetMySmtpCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMySmtpCredentialCount` <a name="resetMySmtpCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetMySmtpCredentialCount"></a>

```typescript
public resetMySmtpCredentialCount(): void
```

##### `resetMySmtpCredentialFilter` <a name="resetMySmtpCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetMySmtpCredentialFilter"></a>

```typescript
public resetMySmtpCredentialFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMySmtpCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMySmtpCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMySmtpCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMySmtpCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMySmtpCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentials">mySmtpCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialCountInput">mySmtpCredentialCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialFilterInput">mySmtpCredentialFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialCount">mySmtpCredentialCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialFilter">mySmtpCredentialFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `mySmtpCredentials`<sup>Required</sup> <a name="mySmtpCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentials"></a>

```typescript
public readonly mySmtpCredentials: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mySmtpCredentialCountInput`<sup>Optional</sup> <a name="mySmtpCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialCountInput"></a>

```typescript
public readonly mySmtpCredentialCountInput: number;
```

- *Type:* number

---

##### `mySmtpCredentialFilterInput`<sup>Optional</sup> <a name="mySmtpCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialFilterInput"></a>

```typescript
public readonly mySmtpCredentialFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `mySmtpCredentialCount`<sup>Required</sup> <a name="mySmtpCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialCount"></a>

```typescript
public readonly mySmtpCredentialCount: number;
```

- *Type:* number

---

##### `mySmtpCredentialFilter`<sup>Required</sup> <a name="mySmtpCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialFilter"></a>

```typescript
public readonly mySmtpCredentialFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMySmtpCredentialsConfig <a name="DataOciIdentityDomainsMySmtpCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMySmtpCredentialsConfig: dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#idcs_endpoint DataOciIdentityDomainsMySmtpCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#authorization DataOciIdentityDomainsMySmtpCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#compartment_id DataOciIdentityDomainsMySmtpCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#id DataOciIdentityDomainsMySmtpCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.mySmtpCredentialCount">mySmtpCredentialCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_count DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.mySmtpCredentialFilter">mySmtpCredentialFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_filter DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#resource_type_schema_version DataOciIdentityDomainsMySmtpCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_by DataOciIdentityDomainsMySmtpCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_order DataOciIdentityDomainsMySmtpCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#start_index DataOciIdentityDomainsMySmtpCredentials#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#idcs_endpoint DataOciIdentityDomainsMySmtpCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#authorization DataOciIdentityDomainsMySmtpCredentials#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#compartment_id DataOciIdentityDomainsMySmtpCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#id DataOciIdentityDomainsMySmtpCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mySmtpCredentialCount`<sup>Optional</sup> <a name="mySmtpCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.mySmtpCredentialCount"></a>

```typescript
public readonly mySmtpCredentialCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_count DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_count}.

---

##### `mySmtpCredentialFilter`<sup>Optional</sup> <a name="mySmtpCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.mySmtpCredentialFilter"></a>

```typescript
public readonly mySmtpCredentialFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_filter DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#resource_type_schema_version DataOciIdentityDomainsMySmtpCredentials#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_by DataOciIdentityDomainsMySmtpCredentials#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_order DataOciIdentityDomainsMySmtpCredentials#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#start_index DataOciIdentityDomainsMySmtpCredentials#start_index}.

---

### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials: dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials = { ... }
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy: dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy: dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta: dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta = { ... }
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags: dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags = { ... }
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser: dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.user"></a>

```typescript
public readonly user: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList</a>

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMySmtpCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser</a>

---



