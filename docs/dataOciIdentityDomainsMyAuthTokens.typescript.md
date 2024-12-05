# `dataOciIdentityDomainsMyAuthTokens` Submodule <a name="`dataOciIdentityDomainsMyAuthTokens` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyAuthTokens <a name="DataOciIdentityDomainsMyAuthTokens" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens oci_identity_domains_my_auth_tokens}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens(scope: Construct, id: string, config: DataOciIdentityDomainsMyAuthTokensConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig">DataOciIdentityDomainsMyAuthTokensConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig">DataOciIdentityDomainsMyAuthTokensConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetMyAuthTokenCount">resetMyAuthTokenCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetMyAuthTokenFilter">resetMyAuthTokenFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMyAuthTokenCount` <a name="resetMyAuthTokenCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetMyAuthTokenCount"></a>

```typescript
public resetMyAuthTokenCount(): void
```

##### `resetMyAuthTokenFilter` <a name="resetMyAuthTokenFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetMyAuthTokenFilter"></a>

```typescript
public resetMyAuthTokenFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyAuthTokens resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyAuthTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyAuthTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyAuthTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyAuthTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokens">myAuthTokens</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokenCountInput">myAuthTokenCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokenFilterInput">myAuthTokenFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokenCount">myAuthTokenCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokenFilter">myAuthTokenFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `myAuthTokens`<sup>Required</sup> <a name="myAuthTokens" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokens"></a>

```typescript
public readonly myAuthTokens: DataOciIdentityDomainsMyAuthTokensMyAuthTokensList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `myAuthTokenCountInput`<sup>Optional</sup> <a name="myAuthTokenCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokenCountInput"></a>

```typescript
public readonly myAuthTokenCountInput: number;
```

- *Type:* number

---

##### `myAuthTokenFilterInput`<sup>Optional</sup> <a name="myAuthTokenFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokenFilterInput"></a>

```typescript
public readonly myAuthTokenFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `myAuthTokenCount`<sup>Required</sup> <a name="myAuthTokenCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokenCount"></a>

```typescript
public readonly myAuthTokenCount: number;
```

- *Type:* number

---

##### `myAuthTokenFilter`<sup>Required</sup> <a name="myAuthTokenFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.myAuthTokenFilter"></a>

```typescript
public readonly myAuthTokenFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokens.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyAuthTokensConfig <a name="DataOciIdentityDomainsMyAuthTokensConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyAuthTokensConfig: dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#idcs_endpoint DataOciIdentityDomainsMyAuthTokens#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#authorization DataOciIdentityDomainsMyAuthTokens#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#compartment_id DataOciIdentityDomainsMyAuthTokens#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#id DataOciIdentityDomainsMyAuthTokens#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.myAuthTokenCount">myAuthTokenCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#my_auth_token_count DataOciIdentityDomainsMyAuthTokens#my_auth_token_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.myAuthTokenFilter">myAuthTokenFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#my_auth_token_filter DataOciIdentityDomainsMyAuthTokens#my_auth_token_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#resource_type_schema_version DataOciIdentityDomainsMyAuthTokens#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#sort_by DataOciIdentityDomainsMyAuthTokens#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#sort_order DataOciIdentityDomainsMyAuthTokens#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#start_index DataOciIdentityDomainsMyAuthTokens#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#idcs_endpoint DataOciIdentityDomainsMyAuthTokens#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#authorization DataOciIdentityDomainsMyAuthTokens#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#compartment_id DataOciIdentityDomainsMyAuthTokens#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#id DataOciIdentityDomainsMyAuthTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myAuthTokenCount`<sup>Optional</sup> <a name="myAuthTokenCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.myAuthTokenCount"></a>

```typescript
public readonly myAuthTokenCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#my_auth_token_count DataOciIdentityDomainsMyAuthTokens#my_auth_token_count}.

---

##### `myAuthTokenFilter`<sup>Optional</sup> <a name="myAuthTokenFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.myAuthTokenFilter"></a>

```typescript
public readonly myAuthTokenFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#my_auth_token_filter DataOciIdentityDomainsMyAuthTokens#my_auth_token_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#resource_type_schema_version DataOciIdentityDomainsMyAuthTokens#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#sort_by DataOciIdentityDomainsMyAuthTokens#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#sort_order DataOciIdentityDomainsMyAuthTokens#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_auth_tokens#start_index DataOciIdentityDomainsMyAuthTokens#start_index}.

---

### DataOciIdentityDomainsMyAuthTokensMyAuthTokens <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokens" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokens"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokens.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyAuthTokensMyAuthTokens: dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokens = { ... }
```


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy: dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy: dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta: dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta = { ... }
```


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyAuthTokensMyAuthTokensTags: dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags = { ... }
```


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyAuthTokensMyAuthTokensUser: dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy">DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy">DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy">DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy">DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensList <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta">DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta">DataOciIdentityDomainsMyAuthTokensMyAuthTokensMeta</a>

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokens">DataOciIdentityDomainsMyAuthTokensMyAuthTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.user"></a>

```typescript
public readonly user: DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList">DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyAuthTokensMyAuthTokens;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokens">DataOciIdentityDomainsMyAuthTokensMyAuthTokens</a>

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags">DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags">DataOciIdentityDomainsMyAuthTokensMyAuthTokensTags</a>

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference <a name="DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyAuthTokens } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser">DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyAuthTokens.DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser">DataOciIdentityDomainsMyAuthTokensMyAuthTokensUser</a>

---



