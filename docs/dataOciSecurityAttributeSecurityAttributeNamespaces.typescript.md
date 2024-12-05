# `dataOciSecurityAttributeSecurityAttributeNamespaces` Submodule <a name="`dataOciSecurityAttributeSecurityAttributeNamespaces` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespaces <a name="DataOciSecurityAttributeSecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces oci_security_attribute_security_attribute_namespaces}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces(scope: Construct, id: string, config?: DataOciSecurityAttributeSecurityAttributeNamespacesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig">DataOciSecurityAttributeSecurityAttributeNamespacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig">DataOciSecurityAttributeSecurityAttributeNamespacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciSecurityAttributeSecurityAttributeNamespacesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespaces resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttributeNamespaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciSecurityAttributeSecurityAttributeNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttributeNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList">DataOciSecurityAttributeSecurityAttributeNamespacesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.securityAttributeNamespaces">securityAttributeNamespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filter"></a>

```typescript
public readonly filter: DataOciSecurityAttributeSecurityAttributeNamespacesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList">DataOciSecurityAttributeSecurityAttributeNamespacesFilterList</a>

---

##### `securityAttributeNamespaces`<sup>Required</sup> <a name="securityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.securityAttributeNamespaces"></a>

```typescript
public readonly securityAttributeNamespaces: DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciSecurityAttributeSecurityAttributeNamespacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespacesConfig <a name="DataOciSecurityAttributeSecurityAttributeNamespacesConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.Initializer"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

const dataOciSecurityAttributeSecurityAttributeNamespacesConfig: dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciSecurityAttributeSecurityAttributeNamespacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#filter DataOciSecurityAttributeSecurityAttributeNamespaces#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}.

---

### DataOciSecurityAttributeSecurityAttributeNamespacesFilter <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.Initializer"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

const dataOciSecurityAttributeSecurityAttributeNamespacesFilter: dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#values DataOciSecurityAttributeSecurityAttributeNamespaces#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#regex DataOciSecurityAttributeSecurityAttributeNamespaces#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#values DataOciSecurityAttributeSecurityAttributeNamespaces#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#regex DataOciSecurityAttributeSecurityAttributeNamespaces#regex}.

---

### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces.Initializer"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

const dataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces: dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecurityAttributeSecurityAttributeNamespacesFilterList <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilterList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get"></a>

```typescript
public get(index: number): DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciSecurityAttributeSecurityAttributeNamespacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>[]

---


### DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciSecurityAttributeSecurityAttributeNamespacesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter">DataOciSecurityAttributeSecurityAttributeNamespacesFilter</a>

---


### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get"></a>

```typescript
public get(index: number): DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer"></a>

```typescript
import { dataOciSecurityAttributeSecurityAttributeNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.isRetired">isRetired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.mode">mode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRetired`<sup>Required</sup> <a name="isRetired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.isRetired"></a>

```typescript
public readonly isRetired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.mode"></a>

```typescript
public readonly mode: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces</a>

---



