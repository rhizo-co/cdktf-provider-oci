# `dataOciOsmanagementSoftwareSourceModuleStream` Submodule <a name="`dataOciOsmanagementSoftwareSourceModuleStream` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementSoftwareSourceModuleStream <a name="DataOciOsmanagementSoftwareSourceModuleStream" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream oci_osmanagement_software_source_module_stream}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSourceModuleStream } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream(scope: Construct, id: string, config: DataOciOsmanagementSoftwareSourceModuleStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig">DataOciOsmanagementSoftwareSourceModuleStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig">DataOciOsmanagementSoftwareSourceModuleStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceModuleStream resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isConstruct"></a>

```typescript
import { dataOciOsmanagementSoftwareSourceModuleStream } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isTerraformElement"></a>

```typescript
import { dataOciOsmanagementSoftwareSourceModuleStream } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isTerraformDataSource"></a>

```typescript
import { dataOciOsmanagementSoftwareSourceModuleStream } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.generateConfigForImport"></a>

```typescript
import { dataOciOsmanagementSoftwareSourceModuleStream } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceModuleStream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsmanagementSoftwareSourceModuleStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsmanagementSoftwareSourceModuleStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementSoftwareSourceModuleStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.profiles">profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementSoftwareSourceModuleStreamConfig <a name="DataOciOsmanagementSoftwareSourceModuleStreamConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSourceModuleStream } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementSoftwareSourceModuleStreamConfig: dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#module_name DataOciOsmanagementSoftwareSourceModuleStream#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#software_source_id DataOciOsmanagementSoftwareSourceModuleStream#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#stream_name DataOciOsmanagementSoftwareSourceModuleStream#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#id DataOciOsmanagementSoftwareSourceModuleStream#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#module_name DataOciOsmanagementSoftwareSourceModuleStream#module_name}.

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#software_source_id DataOciOsmanagementSoftwareSourceModuleStream#software_source_id}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#stream_name DataOciOsmanagementSoftwareSourceModuleStream#stream_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStream.DataOciOsmanagementSoftwareSourceModuleStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream#id DataOciOsmanagementSoftwareSourceModuleStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



