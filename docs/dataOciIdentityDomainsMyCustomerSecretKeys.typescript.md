# `dataOciIdentityDomainsMyCustomerSecretKeys` Submodule <a name="`dataOciIdentityDomainsMyCustomerSecretKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyCustomerSecretKeys <a name="DataOciIdentityDomainsMyCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys oci_identity_domains_my_customer_secret_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys(scope: Construct, id: string, config: DataOciIdentityDomainsMyCustomerSecretKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig">DataOciIdentityDomainsMyCustomerSecretKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig">DataOciIdentityDomainsMyCustomerSecretKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyCount">resetMyCustomerSecretKeyCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyFilter">resetMyCustomerSecretKeyFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMyCustomerSecretKeyCount` <a name="resetMyCustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyCount"></a>

```typescript
public resetMyCustomerSecretKeyCount(): void
```

##### `resetMyCustomerSecretKeyFilter` <a name="resetMyCustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyFilter"></a>

```typescript
public resetMyCustomerSecretKeyFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyCustomerSecretKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyCustomerSecretKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyCustomerSecretKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyCustomerSecretKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyCustomerSecretKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeys">myCustomerSecretKeys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCountInput">myCustomerSecretKeyCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilterInput">myCustomerSecretKeyFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCount">myCustomerSecretKeyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilter">myCustomerSecretKeyFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `myCustomerSecretKeys`<sup>Required</sup> <a name="myCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeys"></a>

```typescript
public readonly myCustomerSecretKeys: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `myCustomerSecretKeyCountInput`<sup>Optional</sup> <a name="myCustomerSecretKeyCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCountInput"></a>

```typescript
public readonly myCustomerSecretKeyCountInput: number;
```

- *Type:* number

---

##### `myCustomerSecretKeyFilterInput`<sup>Optional</sup> <a name="myCustomerSecretKeyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilterInput"></a>

```typescript
public readonly myCustomerSecretKeyFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `myCustomerSecretKeyCount`<sup>Required</sup> <a name="myCustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCount"></a>

```typescript
public readonly myCustomerSecretKeyCount: number;
```

- *Type:* number

---

##### `myCustomerSecretKeyFilter`<sup>Required</sup> <a name="myCustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilter"></a>

```typescript
public readonly myCustomerSecretKeyFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyCustomerSecretKeysConfig <a name="DataOciIdentityDomainsMyCustomerSecretKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCustomerSecretKeysConfig: dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsMyCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#authorization DataOciIdentityDomainsMyCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#compartment_id DataOciIdentityDomainsMyCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#id DataOciIdentityDomainsMyCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyCount">myCustomerSecretKeyCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_count DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyFilter">myCustomerSecretKeyFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_filter DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsMyCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_by DataOciIdentityDomainsMyCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_order DataOciIdentityDomainsMyCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#start_index DataOciIdentityDomainsMyCustomerSecretKeys#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsMyCustomerSecretKeys#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#authorization DataOciIdentityDomainsMyCustomerSecretKeys#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#compartment_id DataOciIdentityDomainsMyCustomerSecretKeys#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#id DataOciIdentityDomainsMyCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myCustomerSecretKeyCount`<sup>Optional</sup> <a name="myCustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyCount"></a>

```typescript
public readonly myCustomerSecretKeyCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_count DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_count}.

---

##### `myCustomerSecretKeyFilter`<sup>Optional</sup> <a name="myCustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyFilter"></a>

```typescript
public readonly myCustomerSecretKeyFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_filter DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsMyCustomerSecretKeys#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_by DataOciIdentityDomainsMyCustomerSecretKeys#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_order DataOciIdentityDomainsMyCustomerSecretKeys#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#start_index DataOciIdentityDomainsMyCustomerSecretKeys#start_index}.

---

### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys: dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys = { ... }
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy: dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy: dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta: dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta = { ... }
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags: dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags = { ... }
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser: dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.user"></a>

```typescript
public readonly user: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCustomerSecretKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser</a>

---



