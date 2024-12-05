# `dataOciDataSafeCompatibleFormatsForSensitiveType` Submodule <a name="`dataOciDataSafeCompatibleFormatsForSensitiveType` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeCompatibleFormatsForSensitiveType <a name="DataOciDataSafeCompatibleFormatsForSensitiveType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type oci_data_safe_compatible_formats_for_sensitive_type}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType(scope: Construct, id: string, config: DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig">DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig">DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForSensitiveType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isConstruct"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformElement"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForSensitiveType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeCompatibleFormatsForSensitiveType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeCompatibleFormatsForSensitiveType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeCompatibleFormatsForSensitiveType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.formatsForSensitiveType">formatsForSensitiveType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `formatsForSensitiveType`<sup>Required</sup> <a name="formatsForSensitiveType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.formatsForSensitiveType"></a>

```typescript
public readonly formatsForSensitiveType: DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeCompatibleFormatsForSensitiveTypeConfig: dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#access_level DataOciDataSafeCompatibleFormatsForSensitiveType#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id_in_subtree DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#id DataOciDataSafeCompatibleFormatsForSensitiveType#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#access_level DataOciDataSafeCompatibleFormatsForSensitiveType#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#compartment_id_in_subtree DataOciDataSafeCompatibleFormatsForSensitiveType#compartment_id_in_subtree}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_sensitive_type#id DataOciDataSafeCompatibleFormatsForSensitiveType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType: dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType = { ... }
```


### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats: dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.get"></a>

```typescript
public get(index: number): DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormats</a>

---


### DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference <a name="DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeCompatibleFormatsForSensitiveType } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.maskingFormats">maskingFormats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maskingFormats`<sup>Required</sup> <a name="maskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.maskingFormats"></a>

```typescript
public readonly maskingFormats: DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeMaskingFormatsList</a>

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForSensitiveType.DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType">DataOciDataSafeCompatibleFormatsForSensitiveTypeFormatsForSensitiveType</a>

---



