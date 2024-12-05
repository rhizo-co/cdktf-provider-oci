# `dataOciIdentityAllowedDomainLicenseTypes` Submodule <a name="`dataOciIdentityAllowedDomainLicenseTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityAllowedDomainLicenseTypes <a name="DataOciIdentityAllowedDomainLicenseTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types oci_identity_allowed_domain_license_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes(scope: Construct, id: string, config?: DataOciIdentityAllowedDomainLicenseTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig">DataOciIdentityAllowedDomainLicenseTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig">DataOciIdentityAllowedDomainLicenseTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetCurrentLicenseTypeName">resetCurrentLicenseTypeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciIdentityAllowedDomainLicenseTypesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>[]

---

##### `resetCurrentLicenseTypeName` <a name="resetCurrentLicenseTypeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetCurrentLicenseTypeName"></a>

```typescript
public resetCurrentLicenseTypeName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityAllowedDomainLicenseTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityAllowedDomainLicenseTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityAllowedDomainLicenseTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityAllowedDomainLicenseTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityAllowedDomainLicenseTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.allowedDomainLicenseTypes">allowedDomainLicenseTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList">DataOciIdentityAllowedDomainLicenseTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeNameInput">currentLicenseTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeName">currentLicenseTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowedDomainLicenseTypes`<sup>Required</sup> <a name="allowedDomainLicenseTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.allowedDomainLicenseTypes"></a>

```typescript
public readonly allowedDomainLicenseTypes: DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filter"></a>

```typescript
public readonly filter: DataOciIdentityAllowedDomainLicenseTypesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList">DataOciIdentityAllowedDomainLicenseTypesFilterList</a>

---

##### `currentLicenseTypeNameInput`<sup>Optional</sup> <a name="currentLicenseTypeNameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeNameInput"></a>

```typescript
public readonly currentLicenseTypeNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciIdentityAllowedDomainLicenseTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `currentLicenseTypeName`<sup>Required</sup> <a name="currentLicenseTypeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.currentLicenseTypeName"></a>

```typescript
public readonly currentLicenseTypeName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes.Initializer"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes: dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes = { ... }
```


### DataOciIdentityAllowedDomainLicenseTypesConfig <a name="DataOciIdentityAllowedDomainLicenseTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.Initializer"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityAllowedDomainLicenseTypesConfig: dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.currentLicenseTypeName">currentLicenseTypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#current_license_type_name DataOciIdentityAllowedDomainLicenseTypes#current_license_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#id DataOciIdentityAllowedDomainLicenseTypes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currentLicenseTypeName`<sup>Optional</sup> <a name="currentLicenseTypeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.currentLicenseTypeName"></a>

```typescript
public readonly currentLicenseTypeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#current_license_type_name DataOciIdentityAllowedDomainLicenseTypes#current_license_type_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciIdentityAllowedDomainLicenseTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#filter DataOciIdentityAllowedDomainLicenseTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#id DataOciIdentityAllowedDomainLicenseTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityAllowedDomainLicenseTypesFilter <a name="DataOciIdentityAllowedDomainLicenseTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.Initializer"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityAllowedDomainLicenseTypesFilter: dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#name DataOciIdentityAllowedDomainLicenseTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#values DataOciIdentityAllowedDomainLicenseTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#regex DataOciIdentityAllowedDomainLicenseTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#name DataOciIdentityAllowedDomainLicenseTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#values DataOciIdentityAllowedDomainLicenseTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_allowed_domain_license_types#regex DataOciIdentityAllowedDomainLicenseTypes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get"></a>

```typescript
public get(index: number): DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference <a name="DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes">DataOciIdentityAllowedDomainLicenseTypesAllowedDomainLicenseTypes</a>

---


### DataOciIdentityAllowedDomainLicenseTypesFilterList <a name="DataOciIdentityAllowedDomainLicenseTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get"></a>

```typescript
public get(index: number): DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityAllowedDomainLicenseTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>[]

---


### DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference <a name="DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityAllowedDomainLicenseTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityAllowedDomainLicenseTypesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAllowedDomainLicenseTypes.DataOciIdentityAllowedDomainLicenseTypesFilter">DataOciIdentityAllowedDomainLicenseTypesFilter</a>

---



